import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class PackagedProductDefinition_ContainedItem      extends BackboneElement
{

   static def : string = 'PackagedProductDefinition_ContainedItem';
   item : Reference [];
   amountQuantity : Quantity ;
   amountInteger : string ;
}
