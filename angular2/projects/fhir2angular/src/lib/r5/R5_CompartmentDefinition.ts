import { R5_CompartmentDefinition_Resource } from './R5_CompartmentDefinition_Resource'
import { R5_CompartmentTypeEnum } from './R5_CompartmentTypeEnum'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_CompartmentDefinition      extends R5_DomainResource
{

   static def : string = 'CompartmentDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   purpose : string ;
   code : R5_CompartmentTypeEnum ;
   search : boolean ;
   resource : R5_CompartmentDefinition_Resource [];
}
