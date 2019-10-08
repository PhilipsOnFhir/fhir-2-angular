import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SearchParamTypeEnum } from './SearchParamTypeEnum'

export class CapabilityStatement2_SearchParam      extends BackboneElement
{

   static def : string = 'CapabilityStatement2_SearchParam';
   name : string ;
   definition : string ;
   type : SearchParamTypeEnum ;
   documentation : string ;
}
