import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DataRequirement_CodeFilter } from './R4_DataRequirement_CodeFilter'
import { R4_DataRequirement_DateFilter } from './R4_DataRequirement_DateFilter'
import { R4_DataRequirement_Sort } from './R4_DataRequirement_Sort'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Reference } from './R4_Reference'

export class R4_DataRequirement      extends R4_Element
{

   static def : string = 'DataRequirement';
   type : string ;
   profile : string [];
   subjectCodeableConcept : R4_CodeableConcept ;
   subjectReference : R4_Reference ;
   mustSupport : string [];
   codeFilter : R4_DataRequirement_CodeFilter [];
   dateFilter : R4_DataRequirement_DateFilter [];
   limit : string ;
   sort : R4_DataRequirement_Sort [];
}
