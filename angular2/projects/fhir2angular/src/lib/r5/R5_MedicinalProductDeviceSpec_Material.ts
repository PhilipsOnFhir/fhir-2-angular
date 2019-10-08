import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicinalProductDeviceSpec_Material      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductDeviceSpec_Material';
   substance : R5_CodeableConcept ;
   alternate : boolean ;
   allergenicIndicator : boolean ;
}
