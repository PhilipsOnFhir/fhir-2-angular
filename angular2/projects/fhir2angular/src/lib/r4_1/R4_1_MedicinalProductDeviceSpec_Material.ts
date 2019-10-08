import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicinalProductDeviceSpec_Material      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductDeviceSpec_Material';
   substance : R4_1_CodeableConcept ;
   alternate : boolean ;
   allergenicIndicator : boolean ;
}
