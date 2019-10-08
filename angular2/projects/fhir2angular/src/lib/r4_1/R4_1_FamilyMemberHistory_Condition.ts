import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_FamilyMemberHistory_Condition      extends R4_1_BackboneElement
{

   static def : string = 'FamilyMemberHistory_Condition';
   code : R4_1_CodeableConcept ;
   outcome : R4_1_CodeableConcept ;
   contributedToDeath : boolean ;
   onsetAge : string ;
   onsetRange : R4_1_Range ;
   onsetPeriod : R4_1_Period ;
   onsetString : string ;
   note : R4_1_Annotation [];
}
