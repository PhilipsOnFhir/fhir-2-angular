import { R4_CompartmentDefinition_Resource } from './R4_CompartmentDefinition_Resource'
import { R4_CompartmentTypeEnum } from './R4_CompartmentTypeEnum'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_CompartmentDefinition      extends R4_DomainResource
{

   static def : string = 'CompartmentDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   purpose : string ;
   code : R4_CompartmentTypeEnum ;
   search : boolean ;
   resource : R4_CompartmentDefinition_Resource [];
}
