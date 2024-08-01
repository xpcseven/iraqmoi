"use server";
import User from "@/database/user.models";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import Family from "@/database/family.models";
import Low from "@/database/low.models";
import Trip from "@/database/trip.models";

// Create User Function
export async function createUser(params: any) {
  try {
    await connectToDatabase();
    const {
      idnum,
      rank,
      gender,
      name,
      familyname,
      worktype,
      workplace,
      placeofbirth,
      state,
      address,
      dateofbirth,
      maritalstatus,
      phonenumber,
      joptitle,
      mderea,
      wkala,
      department,
      jopid,
      healthnum,
      guntype,
      gunnum,
      lastworkhome,
      civilcoll,
      militarycoll,
      dowra,
      mothername,
      kidsnum,
      bloodgroup,
      wifeone,
      wifetwo,
      wifethree,
      wifefure,
      nationalnum,
      cardnum,
      recordnum,
      pagenum,
      mktb,
      mktarname,
      cardidnum,
      nearableplace,
      dateoff,
      ma,
      zu,
      da,
      academic,
      dowradate,
      arkan,
      retire,
      reson,
      passportnum,
      passporttype,
      passportdate,
      passportexpired,
      nationality,
    } = params;

    const user = await User.create({
      idnum,
      rank,
      name,
      familyname,
      gender,
      worktype,
      workplace,
      placeofbirth,
      state,
      address,
      dateofbirth,
      maritalstatus,
      phonenumber,
      joptitle,
      mderea,
      wkala,
      department,
      jopid,
      healthnum,
      guntype,
      gunnum,
      lastworkhome,
      civilcoll,
      militarycoll,
      dowra,
      mothername,
      kidsnum,
      bloodgroup,
      wifeone,
      wifetwo,
      wifethree,
      wifefure,
      nationalnum,
      cardnum,
      recordnum,
      pagenum,
      mktb,
      mktarname,
      cardidnum,
      nearableplace,
      dateoff,
      ma,
      zu,
      da,
      academic,
      dowradate,
      arkan,
      retire,
      reson,
      passportnum,
      passporttype,
      passportdate,
      passportexpired,
      nationality,
    });

    revalidatePath("/userview");
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Get All Users
export async function getAllUsers() {
  try {
    await connectToDatabase();
    const users = await User.find();
    return { users };
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
}


// Get User By ID

export async function getUserById(params: any) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!id) {
      throw new Error("ID parameter is missing.");
    }

    const user = await User.findById(id)
    .populate({
      path: 'family',
      model: Family,
    })
    .lean().populate({
      path: 'low',
      model: Low,
    })
    .lean().populate({
      path: 'trip',
      model: Trip,
    })


    if (!user) {
      console.log("User not found for id:", id);
      return { message: "User not found" };
    }

    return { user };
  } catch (error) {
    console.error("Error fetching user by id:", error);
    return { error: "Error fetching user by id." };
  }
}

// export async function getUserById(params: any) {
//   try {
//     await connectToDatabase();
//     const { id } = params;
//     const user = await User.findById(id).populate({
//       path: 'family',
//       model: Family,
//     });

//     if (user) {
//       return { user };
//     } else {
//       console.log("User not found for id:", id);
//     }
//   } catch (error) {
//     console.error("Error fetching user by id:", error);
//   }
// }



// Delete Function
export async function deleteUser(params: any) {
  try {
    await connectToDatabase();

    const { id } = params;
    console.log("Deleting User _id", id);

    const user = await User.findByIdAndDelete(id);
    if (user) {
      console.log("Deleted User =>", user);
      revalidatePath("/");
      return user;
    } else {
      console.log("User not found for id:", id);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

// Get User By Var

export async function getUserByVar(params: any) {
  try {
    await connectToDatabase();

    const { workplace } = params;
    const user = await User.findOne(workplace);
    if (user) {
      return { user };
    } else {
      console.log("User not found for workplace:", workplace);
    }
  } catch (error) {
    console.error("Error fetching user by workplace:", error);
  }
}

// Update User
export async function updateUser(params: any) {
  try {
    await connectToDatabase();

    const { _id, userData, path } = params;
    const user = await User.findByIdAndUpdate(_id, userData, { new: true });

    if (user) {
      console.log("Updated User =>", user);
      revalidatePath(path);
      return { user };
    } else {
      console.log("User not found for id:", _id);
    }
  } catch (error) {
    console.error;
    console.error("Error updating user:", error);
  }
}
