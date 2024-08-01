// "use server";
// import { connectToDatabase } from "../mongoose";
// import { revalidatePath } from "next/cache";
// import User from "@/database/user.models";

// // Create low function

// export async function createCourse(params: any) {
//   try {
//     await connectToDatabase();
//     const {
//         userid,
//         coursename,
//         courseplace,
//         coursestate,
//         coursetime,
//          path } = params;
//          console.log("hussam =>", userid)
//     const course = await Courses.create({
//         userid,
//         coursename,
//         courseplace,
//         coursestate,
//         coursetime,
//     });

//     const UserObject = await User.findByIdAndUpdate(userid, {$push: { course: course._id },});
//     revalidatePath(path);
//   } catch (error) {
//     console.error("Error creating course:", error);

//   }
// }

// // Update Low
// export async function updateCourses(params: any) {
//   try {
//     await connectToDatabase();

//     const { _id, CoursesData, path } = params;
//     const courses = await Courses.findByIdAndUpdate(_id, CoursesData, { new: true });

//     if (courses) {
//       console.log("Updated User =>", courses);
//       revalidatePath(path);
//       return { courses };
//     } else {
//       console.log("courses not found for id:", _id);
//     }
//   } catch (error) {
//     console.error;
//     console.error("Error updating courses:", error);
//   }
// }

// // Delete from family Function
// export async function deleteUserCourses(params: any) {
//   try {
//     await connectToDatabase();

//     const { id } = params;
//     console.log("Deleting User _id", id);

//     const courses = await Courses.findByIdAndDelete(id);
//     if (courses) {
//       console.log("Deleted User =>", courses);
//       revalidatePath("/");
//       return courses;
//     } else {
//       console.log("User not found for id:", id);
//     }
//   } catch (error) {
//     console.error("Error deleting courses:", error);
//   }
// }
