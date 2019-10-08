import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_OperationDefinition_Binding      extends DSTU2_BackboneElement
{

   static def : string = 'OperationDefinition_Binding';
   strength : string ;
   valueSetUri : string ;
   valueSetReference : DSTU2_Reference ;
}
