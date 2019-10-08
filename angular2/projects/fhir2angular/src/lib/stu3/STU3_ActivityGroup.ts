import { STU3_ActivityGroup_Action } from './STU3_ActivityGroup_Action'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ActivityGroup      extends STU3_DomainResource
{

   static def : string = 'ActivityGroup';
   identifier : STU3_Identifier ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   author : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   note : STU3_Annotation [];
   action : STU3_ActivityGroup_Action [];
}
