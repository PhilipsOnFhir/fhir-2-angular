import { STU3_Annotation } from './STU3_Annotation'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'

export class STU3_FamilyMemberHistory_Condition      extends STU3_BackboneElement
{

   static def : string = 'FamilyMemberHistory_Condition';
   code : STU3_CodeableConcept ;
   outcome : STU3_CodeableConcept ;
   onsetAge : string ;
   onsetRange : STU3_Range ;
   onsetPeriod : STU3_Period ;
   onsetString : string ;
   note : STU3_Annotation [];
}
