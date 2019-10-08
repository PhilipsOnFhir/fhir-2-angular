import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DataRequirement_CodeFilter } from './R4_1_DataRequirement_CodeFilter'
import { R4_1_DataRequirement_DateFilter } from './R4_1_DataRequirement_DateFilter'
import { R4_1_DataRequirement_Sort } from './R4_1_DataRequirement_Sort'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DataRequirement      extends R4_1_Element
{

   static def : string = 'DataRequirement';
   type : string ;
   profile : string [];
   subjectCodeableConcept : R4_1_CodeableConcept ;
   subjectReference : R4_1_Reference ;
   mustSupport : string [];
   codeFilter : R4_1_DataRequirement_CodeFilter [];
   dateFilter : R4_1_DataRequirement_DateFilter [];
   limit : string ;
   sort : R4_1_DataRequirement_Sort [];
}
