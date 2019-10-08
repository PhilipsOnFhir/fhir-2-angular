import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Medication_Ingredient      extends DSTU2_BackboneElement
{

   static def : string = 'Medication_Ingredient';
   item : DSTU2_Reference ;
   amount : DSTU2_Ratio ;
}
