"use server";
import Low from "@/database/low.models";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import User from "@/database/user.models";

// Create low function

export async function createLow(params: any) {
  try {
    await connectToDatabase();
    const {
        userid,
        lownum,
        judgmenttime,
        judgmenttype,
        courtname,
        judgmentnum,
        judgmentdate,
         path } = params;
         console.log("hussam =>", userid)
    const low = await Low.create({
        userid,
        lownum,
        judgmenttime,
        judgmenttype,
        courtname,
        judgmentnum,
        judgmentdate,
    });

    const UserObject = await User.findByIdAndUpdate(userid, {$push: { low: low._id },});
    revalidatePath(path);
  } catch (error) {
    console.error("Error creating low:", error);

  }
}

// Update Low
export async function updateLow(params: any) {
  try {
    await connectToDatabase();

    const { _id, lowData, path } = params;
    const low = await Low.findByIdAndUpdate(_id, lowData, { new: true });

    if (low) {
      console.log("Updated User =>", low);
      revalidatePath(path);
      return { low };
    } else {
      console.log("low not found for id:", _id);
    }
  } catch (error) {
    console.error;
    console.error("Error updating low:", error);
  }
}

// Delete from family Function
export async function deleteUserLow(params: any) {
  try {
    await connectToDatabase();

    const { id } = params;
    console.log("Deleting User _id", id);

    const low = await Low.findByIdAndDelete(id);
    if (low) {
      console.log("Deleted User =>", low);
      revalidatePath("/");
      return low;
    } else {
      console.log("User not found for id:", id);
    }
  } catch (error) {
    console.error("Error deleting low:", error);
  }
}