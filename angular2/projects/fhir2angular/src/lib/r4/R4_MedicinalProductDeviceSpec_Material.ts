import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MedicinalProductDeviceSpec_Material      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductDeviceSpec_Material';
   substance : R4_CodeableConcept ;
   alternate : boolean ;
   allergenicIndicator : boolean ;
}
