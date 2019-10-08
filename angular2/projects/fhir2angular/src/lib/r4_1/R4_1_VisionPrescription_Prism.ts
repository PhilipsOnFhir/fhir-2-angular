import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_VisionBaseEnum } from './R4_1_VisionBaseEnum'

export class R4_1_VisionPrescription_Prism      extends R4_1_BackboneElement
{

   static def : string = 'VisionPrescription_Prism';
   amount : string ;
   base : R4_1_VisionBaseEnum ;
}
