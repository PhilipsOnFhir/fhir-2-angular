import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_SimpleQuantity } from './R4_SimpleQuantity'

export class R4_Medication_Content      extends R4_BackboneElement
{

   static def : string = 'Medication_Content';
   item : R4_Reference ;
   amount : R4_SimpleQuantity ;
}
