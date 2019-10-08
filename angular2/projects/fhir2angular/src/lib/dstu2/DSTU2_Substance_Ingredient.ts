import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Substance_Ingredient      extends DSTU2_BackboneElement
{

   static def : string = 'Substance_Ingredient';
   quantity : DSTU2_Ratio ;
   substance : DSTU2_Reference ;
}
