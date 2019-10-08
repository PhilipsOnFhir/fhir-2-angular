import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Contract_SecurityLabel      extends R4_1_BackboneElement
{

   static def : string = 'Contract_SecurityLabel';
   number : string [];
   classification : R4_1_Coding ;
   category : R4_1_Coding [];
   control : R4_1_Coding [];
}
