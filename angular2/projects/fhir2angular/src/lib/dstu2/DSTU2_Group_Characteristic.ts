import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Range } from './DSTU2_Range'

export class DSTU2_Group_Characteristic      extends DSTU2_BackboneElement
{

   static def : string = 'Group_Characteristic';
   code : DSTU2_CodeableConcept ;
   valueCodeableConcept : DSTU2_CodeableConcept ;
   valueBoolean : boolean ;
   valueQuantity : DSTU2_Quantity ;
   valueRange : DSTU2_Range ;
   exclude : boolean ;
   period : DSTU2_Period ;
}
