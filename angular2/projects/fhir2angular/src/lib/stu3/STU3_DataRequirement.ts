import { STU3_DataRequirement_CodeFilter } from './STU3_DataRequirement_CodeFilter'
import { STU3_DataRequirement_DateFilter } from './STU3_DataRequirement_DateFilter'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_DataRequirement      extends STU3_Element
{

   static def : string = 'DataRequirement';
   type : string ;
   profile : string [];
   mustSupport : string [];
   codeFilter : STU3_DataRequirement_CodeFilter [];
   dateFilter : STU3_DataRequirement_DateFilter [];
}
