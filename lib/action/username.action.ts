"use server";

import UserProfile from "@/database/usernamepermition.models";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

// Create Username function
export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  mderea: string;
  workplace: string;
  department: string;
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await UserProfile.create(userData);
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
