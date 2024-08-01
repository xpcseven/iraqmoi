"use server";
import Family from "@/database/family.models";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import User from "@/database/user.models";

// Create family function

export async function createFamily(params: any) {
  try {
    await connectToDatabase();
    const { 
      name,
       gender,
        userid,
        allsefa,
        dateofbrith,
        brithplace,
        work,
        workplace,
        state,
        address,
        nationality,
        othernationality,
         path } = params;
    const family = await Family.create({
      name,
      gender,
      userid,
      allsefa,
      dateofbrith,
      brithplace,
      work,
      workplace,
      state,
      address,
      nationality,
      othernationality,
    });

    const UserObject = await User.findByIdAndUpdate(userid, {
      $push: { family: family._id },
    });
    revalidatePath(path);
  } catch (error) {
    console.error("Error creating family:", error);
  }
}

// Update family
export async function updateFamily(params: any) {
  try {
    await connectToDatabase();

    const { _id, familyData, path } = params;
    const family = await Family.findByIdAndUpdate(_id, familyData, { new: true });

    if (family) {
      console.log("Updated User =>", family);
      revalidatePath(path);
      return { family };
    } else {
      console.log("family not found for id:", _id);
    }
  } catch (error) {
    console.error;
    console.error("Error updating family:", error);
  }
}

// Delete from family Function
export async function deleteUserFamily(params: any) {
  try {
    await connectToDatabase();

    const { id } = params;
    console.log("Deleting User _id", id);

    const family = await Family.findByIdAndDelete(id);
    if (family) {
      console.log("Deleted User =>", family);
      revalidatePath("/");
      return family;
    } else {
      console.log("User not found for id:", id);
    }
  } catch (error) {
    console.error("Error deleting family:", error);
  }
}

