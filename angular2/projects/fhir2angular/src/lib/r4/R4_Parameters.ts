import { R4_DomainResource } from './R4_DomainResource'
import { R4_Parameters_Parameter } from './R4_Parameters_Parameter'
import { R4_Resource } from './R4_Resource'

export class R4_Parameters      extends R4_Resource
{

   static def : string = 'Parameters';
   parameter : R4_Parameters_Parameter [];
}
