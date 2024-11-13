import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

const CourseCard = ({ course, onGoToCourse }: CourseCardProps) => {
  return (
    <Card className="course-card group" onClick={() => onGoToCourse(course)}>
      <CardHeader className="course-card__header">
        {course.image && (
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={350}
            className="course-card__image"
          />
        )}
      </CardHeader>
      <CardContent className="course-card__content">
        <CardTitle className="course-card__title">
          {course.title}: {course.description}
        </CardTitle>

        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage
              src="/instructor_avatar.png"
              alt={course.teacherName}
            />
            <AvatarFallback className="bg-secondary-700 text-black">
              {course.teacherName[0]}
            </AvatarFallback>
          </Avatar>

          <p className="text-sm text-customgreys-dirtyGrey">
            {course.teacherName}
          </p>
        </div>

        <CardFooter className="course-card__footer">
          <div className="course-card__category">{course.category}</div>
          <span className="course-card__price">
            {formatPrice(course.price)}
          </span>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CourseCard;