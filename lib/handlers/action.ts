"use server";

import { ZodError, ZodSchema } from "zod";
import { UnathorizedError, ValidationError } from "../http-errors";
import { auth } from "@/auth";
import dbConnect from "../mongoose";
import { Session } from "next-auth";

type ActionOptions<T> = {
  params?: T;
  schema?: ZodSchema<T>;
  authorize?: boolean;
};

// 1. Checkling whether the schema and params are provided and validated
// 2. Checking whether the user is authorized
// 3. Connecting to the database
// 4. Returning the params and session

async function action<T>({ params, schema, authorize }: ActionOptions<T>) {
  if (schema && params) {
    try {
      schema.parse(params);
    } catch (error) {
      if (error instanceof ZodError) {
        return new ValidationError(
          error.flatten().fieldErrors as Record<string, string[]>,
        );
      } else {
        return new Error("Schema validation failed");
      }
    }
  }

  let session: Session | null = null;

  if (authorize) {
    session = await auth();

    if (!session) {
      return new UnathorizedError();
    }
  }

  await dbConnect();

  return { params, session };
}

export default action;
