import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DataElementStringencyEnum } from './STU3_DataElementStringencyEnum'
import { STU3_DataElement_Mapping } from './STU3_DataElement_Mapping'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ElementDefinition } from './STU3_ElementDefinition'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_DataElement      extends STU3_DomainResource
{

   static def : string = 'DataElement';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   name : string ;
   title : string ;
   contact : STU3_ContactDetail [];
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   copyright : string ;
   stringency : STU3_DataElementStringencyEnum ;
   mapping : STU3_DataElement_Mapping [];
   element : STU3_ElementDefinition [];
}
