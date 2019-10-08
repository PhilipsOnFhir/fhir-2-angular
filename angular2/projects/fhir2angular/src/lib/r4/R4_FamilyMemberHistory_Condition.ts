import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'

export class R4_FamilyMemberHistory_Condition      extends R4_BackboneElement
{

   static def : string = 'FamilyMemberHistory_Condition';
   code : R4_CodeableConcept ;
   outcome : R4_CodeableConcept ;
   contributedToDeath : boolean ;
   onsetAge : string ;
   onsetRange : R4_Range ;
   onsetPeriod : R4_Period ;
   onsetString : string ;
   note : R4_Annotation [];
}
