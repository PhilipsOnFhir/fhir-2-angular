import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Medication_Content      extends DSTU2_BackboneElement
{

   static def : string = 'Medication_Content';
   item : DSTU2_Reference ;
   amount : DSTU2_SimpleQuantity ;
}
