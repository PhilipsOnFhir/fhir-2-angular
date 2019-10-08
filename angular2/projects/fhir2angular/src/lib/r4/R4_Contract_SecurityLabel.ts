import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Contract_SecurityLabel      extends R4_BackboneElement
{

   static def : string = 'Contract_SecurityLabel';
   number : string [];
   classification : R4_Coding ;
   category : R4_Coding [];
   control : R4_Coding [];
}
