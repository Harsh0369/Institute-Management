import {Router} from express;
import * as courseController from "../controller/course.controller.js";

const router = Router();


router.post("/", courseController.createCourse);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);
router.get("/", courseController.getCourses);    
