import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_VisionBaseEnum } from './R4_VisionBaseEnum'

export class R4_VisionPrescription_Prism      extends R4_BackboneElement
{

   static def : string = 'VisionPrescription_Prism';
   amount : string ;
   base : R4_VisionBaseEnum ;
}
