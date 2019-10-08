import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_OperationDefinition_Contact      extends R4_BackboneElement
{

   static def : string = 'OperationDefinition_Contact';
   name : string ;
   telecom : R4_ContactPoint [];
}
