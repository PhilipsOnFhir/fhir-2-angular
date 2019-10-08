import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Parameters_Parameter } from './DSTU2_Parameters_Parameter'
import { DSTU2_Resource } from './DSTU2_Resource'

export class DSTU2_Parameters      extends DSTU2_Resource
{

   static def : string = 'Parameters';
   parameter : DSTU2_Parameters_Parameter [];
}
