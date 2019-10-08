import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Range } from './R5_Range'

export class R5_FamilyMemberHistory_Condition      extends R5_BackboneElement
{

   static def : string = 'FamilyMemberHistory_Condition';
   code : R5_CodeableConcept ;
   outcome : R5_CodeableConcept ;
   contributedToDeath : boolean ;
   onsetAge : string ;
   onsetRange : R5_Range ;
   onsetPeriod : R5_Period ;
   onsetString : string ;
   note : R5_Annotation [];
}
