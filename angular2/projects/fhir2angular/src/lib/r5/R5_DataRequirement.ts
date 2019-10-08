import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DataRequirement_CodeFilter } from './R5_DataRequirement_CodeFilter'
import { R5_DataRequirement_DateFilter } from './R5_DataRequirement_DateFilter'
import { R5_DataRequirement_Sort } from './R5_DataRequirement_Sort'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Reference } from './R5_Reference'

export class R5_DataRequirement      extends R5_Element
{

   static def : string = 'DataRequirement';
   type : string ;
   profile : string [];
   subjectCodeableConcept : R5_CodeableConcept ;
   subjectReference : R5_Reference ;
   mustSupport : string [];
   codeFilter : R5_DataRequirement_CodeFilter [];
   dateFilter : R5_DataRequirement_DateFilter [];
   limit : string ;
   sort : R5_DataRequirement_Sort [];
}
