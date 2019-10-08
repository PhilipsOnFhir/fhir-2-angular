import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CompositionAttestationModeEnum } from './STU3_CompositionAttestationModeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Composition_Attester      extends STU3_BackboneElement
{

   static def : string = 'Composition_Attester';
   mode : STU3_CompositionAttestationModeEnum [];
   time : string ;
   party : STU3_Reference ;
}
