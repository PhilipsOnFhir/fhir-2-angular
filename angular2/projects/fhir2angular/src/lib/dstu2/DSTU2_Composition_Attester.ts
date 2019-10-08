import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CompositionAttestationModeEnum } from './DSTU2_CompositionAttestationModeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Composition_Attester      extends DSTU2_BackboneElement
{

   static def : string = 'Composition_Attester';
   mode : DSTU2_CompositionAttestationModeEnum [];
   time : string ;
   party : DSTU2_Reference ;
}
