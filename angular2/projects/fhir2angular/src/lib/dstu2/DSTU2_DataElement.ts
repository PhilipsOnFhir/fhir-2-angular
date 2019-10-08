import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DataElementStringencyEnum } from './DSTU2_DataElementStringencyEnum'
import { DSTU2_DataElement_Contact } from './DSTU2_DataElement_Contact'
import { DSTU2_DataElement_Mapping } from './DSTU2_DataElement_Mapping'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ElementDefinition } from './DSTU2_ElementDefinition'
import { DSTU2_Identifier } from './DSTU2_Identifier'

export class DSTU2_DataElement      extends DSTU2_DomainResource
{

   static def : string = 'DataElement';
   url : string ;
   identifier : DSTU2_Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_DataElement_Contact [];
   date : string ;
   useContext : DSTU2_CodeableConcept [];
   copyright : string ;
   stringency : DSTU2_DataElementStringencyEnum ;
   mapping : DSTU2_DataElement_Mapping [];
   element : DSTU2_ElementDefinition [];
}
