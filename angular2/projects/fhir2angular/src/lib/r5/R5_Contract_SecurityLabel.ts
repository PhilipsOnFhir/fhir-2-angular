import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Contract_SecurityLabel      extends R5_BackboneElement
{

   static def : string = 'Contract_SecurityLabel';
   number : string [];
   classification : R5_Coding ;
   category : R5_Coding [];
   control : R5_Coding [];
}
