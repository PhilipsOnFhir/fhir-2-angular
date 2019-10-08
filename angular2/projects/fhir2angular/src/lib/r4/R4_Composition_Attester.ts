import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CompositionAttestationModeEnum } from './R4_CompositionAttestationModeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Composition_Attester      extends R4_BackboneElement
{

   static def : string = 'Composition_Attester';
   mode : R4_CompositionAttestationModeEnum ;
   time : string ;
   party : R4_Reference ;
}
