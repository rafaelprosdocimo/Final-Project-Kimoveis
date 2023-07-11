import { handleError } from "./handleError.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyIdExists } from "./verifyIdExists.middlewares";
import { verifyUserPermission } from "./verifyUserPermission.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import { uniqueCategory } from "./uniqueCategory.middlewares";
import verifyAddress from "./verifyAddress.middlewares";
import { isAdminOrOwner } from "./isAdminOrOwner.middlewares";
import { verifySchedule } from "./verifyScheduele.middlewares";
import { verifyIdRealEstateExists } from "./verifyIdExistsRealEstate.middlewares";
import  verifyCategoriesExists from "./verifyCategoriesExists.middleware";
import dateAndHour from "./dateAndHour.middlewares";
import{ verifyIdRealEstateExistsParams }from "./verifyIdExistsRealEstateParams.middlewares";
export default {
  dateAndHour,
  verifyIdRealEstateExistsParams,
  verifyCategoriesExists,
  verifyIdRealEstateExists,
  verifySchedule,
  isAdminOrOwner,
  verifyAddress,
  uniqueCategory,
  uniqueEmail,
  handleError,
  validateBody,
  verifyIdExists,
  verifyUserPermission,
  verifyToken,
};
