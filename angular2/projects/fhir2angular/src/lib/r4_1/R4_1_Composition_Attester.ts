import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CompositionAttestationModeEnum } from './R4_1_CompositionAttestationModeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Composition_Attester      extends R4_1_BackboneElement
{

   static def : string = 'Composition_Attester';
   mode : R4_1_CompositionAttestationModeEnum ;
   time : string ;
   party : R4_1_Reference ;
}
