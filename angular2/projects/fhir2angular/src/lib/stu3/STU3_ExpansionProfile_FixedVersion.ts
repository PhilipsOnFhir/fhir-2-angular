import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_SystemVersionProcessingModeEnum } from './STU3_SystemVersionProcessingModeEnum'

export class STU3_ExpansionProfile_FixedVersion      extends STU3_BackboneElement
{

   static def : string = 'ExpansionProfile_FixedVersion';
   system : string ;
   version : string ;
   mode : STU3_SystemVersionProcessingModeEnum ;
}
