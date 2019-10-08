import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Specimen_Collection      extends DSTU2_BackboneElement
{

   static def : string = 'Specimen_Collection';
   collector : DSTU2_Reference ;
   comment : string [];
   collectedDateTime : string ;
   collectedPeriod : DSTU2_Period ;
   quantity : DSTU2_SimpleQuantity ;
   method : DSTU2_CodeableConcept ;
   bodySite : DSTU2_CodeableConcept ;
}
