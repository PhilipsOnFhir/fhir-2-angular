import { DSTU2_Age } from './DSTU2_Age'
import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Range } from './DSTU2_Range'

export class DSTU2_FamilyMemberHistory_Condition      extends DSTU2_BackboneElement
{

   static def : string = 'FamilyMemberHistory_Condition';
   code : DSTU2_CodeableConcept ;
   outcome : DSTU2_CodeableConcept ;
   onsetQuantity : DSTU2_Age ;
   onsetRange : DSTU2_Range ;
   onsetPeriod : DSTU2_Period ;
   onsetString : string ;
   note : DSTU2_Annotation ;
}
