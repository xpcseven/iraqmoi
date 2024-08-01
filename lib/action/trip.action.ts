"use server";
import Trip from "@/database/trip.models";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import User from "@/database/user.models";

// Create trip function

export async function createTrip(params: any) {
  try {
    await connectToDatabase();
    const { 
        userid,
        contryname,
        tripdate,
        tripreson,
        tripdays,
        formal,


         path } = params;
    const trip = await Trip.create({
        userid,
        contryname,
        tripdate,
        tripreson,
        tripdays,
        formal,
    });

    const UserObject = await User.findByIdAndUpdate(userid, {
      $push: { trip: trip._id },
    });
    revalidatePath(path);
  } catch (error) {
    console.error("Error creating trip:", error);
  }
}

// Update trip
export async function updateTrip(params: any) {
  try {
    await connectToDatabase();

    const { _id, tripData, path } = params;
    const trip = await Trip.findByIdAndUpdate(_id, tripData, { new: true });

    if (trip) {
      console.log("Updated User =>", trip);
      revalidatePath(path);
      return { trip };
    } else {
      console.log("trip not found for id:", _id);
    }
  } catch (error) {
    console.error;
    console.error("Error updating trip:", error);
  }
}

// Delete from trip Function
export async function deleteUserTrip(params: any) {
  try {
    await connectToDatabase();

    const { id } = params;
    console.log("Deleting User _id", id);

    const trip = await Trip.findByIdAndDelete(id);
    if (trip) {
      console.log("Deleted User =>", trip);
      revalidatePath("/");
      return trip;
    } else {
      console.log("User not found for id:", id);
    }
  } catch (error) {
    console.error("Error deleting trip:", error);
  }
}
