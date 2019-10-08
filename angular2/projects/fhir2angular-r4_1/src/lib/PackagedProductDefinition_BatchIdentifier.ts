import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class PackagedProductDefinition_BatchIdentifier      extends BackboneElement
{

   static def : string = 'PackagedProductDefinition_BatchIdentifier';
   outerPackaging : Identifier ;
   immediatePackaging : Identifier ;
}
