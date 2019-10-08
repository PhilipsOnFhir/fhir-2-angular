import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CompositionAttestationModeEnum } from './R5_CompositionAttestationModeEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Composition_Attester      extends R5_BackboneElement
{

   static def : string = 'Composition_Attester';
   mode : R5_CompositionAttestationModeEnum ;
   time : string ;
   party : R5_Reference ;
}
