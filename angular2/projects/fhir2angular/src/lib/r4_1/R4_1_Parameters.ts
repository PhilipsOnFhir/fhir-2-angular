import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Parameters_Parameter } from './R4_1_Parameters_Parameter'
import { R4_1_Resource } from './R4_1_Resource'

export class R4_1_Parameters      extends R4_1_Resource
{

   static def : string = 'Parameters';
   parameter : R4_1_Parameters_Parameter [];
}
